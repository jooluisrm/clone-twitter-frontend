type Props = {
    placeholder: string;
    rows: number;
    defaultValue?: string; // trocar para value futuramente
    //value?: string;
};

export const Textarea = ({ placeholder, rows, defaultValue }: Props) => {
    return (
        <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
            <textarea
                className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
                placeholder={placeholder}
                defaultValue={defaultValue}
                rows={rows}
            />
        </div>
    );
};
