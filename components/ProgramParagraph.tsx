
export const ProgramParagraph = ({title,content}:{title?:string,content:string}) => {
    return <div >
        <div>
            <div className="text-6xl font-extrabold pl-10 ">{title}</div>
            <div className="text-xl mt-10 pl-10">{content}</div>
        </div>
    </div>
}