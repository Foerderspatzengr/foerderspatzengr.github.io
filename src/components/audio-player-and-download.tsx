import * as React from "react";

type Props = { url: string, fileName: string };
export const AudioPlayerAndDownload: React.FC<Props> = ({url, fileName}) => <div>
    <audio controls src={url} style={{width: "100%"}} title={fileName}/>
    <p>
        <a href={url} download={fileName} style={{display: "block"}}>Download</a>
    </p>
</div>;