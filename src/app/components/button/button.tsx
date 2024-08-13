interface ButtonProps {
    onClick: () => void;
    background?: string,
    textColor?: string,
    rounded?: string,
    label: string,
    wSize?: string,
    smWSize?: string,
    hSize?: string,
    disable?: boolean
};

const Button = ({
    onClick,
    background= "bg-blue-500",
    textColor= "text-black",
    rounded= "rounded-lg",
    label,
    wSize= "w-2/12",
    smWSize ,
    hSize= "h-full",
    disable= true
}:ButtonProps) => {

    return(
        <button
        onClick={onClick}
        className={`p-3 drop-shadow-lg ${background} ${textColor} ${rounded} ${wSize} ${hSize} ${disable} ${smWSize}`}>
            {label}
        </button>
    );
}

export default Button;