import * as React from "react"
import {useEffect, useState} from "react"
import Layout from '../components/layout'
import '../components/global.css'
import {AudioPlayerAndDownload} from "../components/audio-player-and-download";
import {graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const {crypto: {subtle}} = window;

const decrypt = async (password: string, iv: Uint8Array, salt: Uint8Array, data: Uint8Array): Promise<string> => {
    const key = await subtle.deriveKey(
        {
            name: "PBKDF2",
            salt,
            iterations: 100000,
            hash: "SHA-256",
        },
        await subtle.importKey(
            "raw",
            new TextEncoder().encode(password),
            "PBKDF2",
            false,
            ["deriveBits", "deriveKey"],
        ),
        {name: "AES-GCM", length: 256},
        true,
        ["encrypt", "decrypt"],
    );
    return URL.createObjectURL(new Blob([new Uint8Array(await subtle.decrypt({
        name: "AES-GCM",
        iv
    }, key, data))], {type: "audio/mpeg"}));
};
const Sommerfest2024 = ({data}) => {
    const {gatsbyImageData} = data.file.childImageSharp;
    const [downloadUrl, setDownloadUrl] = useState();
    const [hasError, setHasError] = useState(false);
    const [acceptTandC, setAcceptTandC] = useState(false);
    const [password, setPassword] = useState("");
    const [iv, setIv] = useState<Uint8Array>([]);
    const [salt, setSalt] = useState<Uint8Array>([]);
    const [media, setMedia] = useState<Uint8Array>([]);
    const handleSubmit = () => acceptTandC
        ? decrypt(password, iv, salt, media).then(setDownloadUrl, () => setHasError(true))
        : setHasError(true);
    useEffect(async () => {
        const response = await fetch("/20240827-sommerfest.mp3.crypt");
        const reader = response.body?.getReader();
        const input = new Uint8Array(+(response.headers.get("Content-Length") ?? 0));
        let position = 0;
        do {
            const {done, value} = await reader?.read() ?? {};
            input.set(value ?? [], position)
            position = done ? 0 : position + (value?.length ?? 0);
        } while (position > 0);
        setIv(input.slice(0, 12));
        setSalt(input.slice(12, 24));
        setMedia(input.slice(24));
    }, []);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setHasError(false);
    };
    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTandC(e.target.checked);
        setHasError(false);
    };
    return (
        <main className="datenschutz">
            <Layout pageTitle="Sommerfest 2024">
                <GatsbyImage alt="" image={gatsbyImageData} imgStyle={{objectPosition: "0 72%"}}/>
                <p>
                    Eigens für unser Spatzennest wurde, anlässlich des
                    Sommerfestes, ein Hörspiel für die Kinder der
                    Einrichtung geschrieben und vertont.
                </p>
                <p>
                    So funktioniert’s: Die Audiodatei können Sie hier unter Angabe eines Passworts heruntergeladen und
                    dann z.B. auf einem Kreativtonie mit einer Toniebox im privaten Bereich anhören. Besitzen Sie so
                    eine Box nicht und hätten die Datei gern auf einem USB-Stick oder einer CD, dann können Sie sich
                    jederzeit an den Elternrat wenden.
                </p>
                <p>
                    Das Passwort erhalten Sie am Eingang zum Sommerfest vom Förderverein.
                </p>
                <p>
                    Das Hörspiel stammt aus der Feder von Tom Hohlfeld. Vielen Dank!
                </p>
                <h2>Download Hörspiel</h2>
                {downloadUrl
                    ? <AudioPlayerAndDownload url={downloadUrl} fileName={"tom-hohlfeld-sommerfest-bauernhof.mp3"}/>
                    : <div>
                        <p>
                            <label>
                                <input type="checkbox" checked={acceptTandC} onChange={handleCheckBoxChange}/>
                                {" "}
                                <span>Ich stimme zu, diese Datei nur zu privaten Zwecken zu verwenden, sie nicht weiterzugeben oder zu verbreiten und keine davon abgeleiteten Werke anzufertigen.</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    placeholder="Passwort"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </label>
                            {" "}
                            {iv && <label>
                                <button onClick={handleSubmit}>Freischalten</button>
                            </label>}
                        </p>
                        {hasError && <p style={{
                            border: "2px dashed #cc0000",
                            color: "#cc0000",
                            background: "#ffeeee",
                            padding: "1em"
                        }}>
                            {acceptTandC ? "Das eingegebene Passwort ist falsch." : "Die Zustimmung ist erforderlich."}
                        </p>}
                    </div>
                }
            </Layout>
        </main>
    )
}
export const titlequery = graphql`
  	query titlequery {
  		file(relativePath: {eq: "sommerfest.png"}) {
    		childImageSharp {
      			gatsbyImageData
    		}
  		}
	}
`

export const Head = () => <title>Sommerfest 2024</title>
export default Sommerfest2024