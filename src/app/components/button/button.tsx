interface ButtonProps {
    onClick: () => void;
    background?: string,
    backgroundHover?: string,
    textColor?: string,
    textSize?: string,
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
    backgroundHover= "bg-blue-700",
    textColor= "text-black",
    textSize= "text-base",
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
        className={`p-3 drop-shadow-lg ${background} ${backgroundHover} transition duration-500 ${textColor} ${textSize} ${rounded} ${wSize} ${hSize} ${disable} ${smWSize}`}>
            {label}
        </button>
    );
}

export default Button;