import Image from 'next/image';
import gradHat from 'public/icons/graduation-hat.png';

export default function grad() {
    return (
        <Image
            src={gradHat}
            style={{
                width: "50px",
                height: "70px"
            }}
        />
    );
};