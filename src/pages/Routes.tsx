import { useEffect, useState } from 'react';

export function Rotas() {
  const [contdown, setContdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContdown(contdown - 1);
    }, 1000);

    if (contdown === 0) {
      clearTimeout(timer);
      window.location.href =
        'https://www.google.com/maps/place/Espa%C3%A7o+de+Festa+La+Belle+Maison/@-22.4709687,-44.4750448,17z/data=!3m1!4b1!4m6!3m5!1s0x9e9876a918841f:0x438682f250b8a761!8m2!3d-22.4709687!4d-44.4750448!16s%2Fg%2F11g_zmqx3!5m1!1e1';
    }

    return () => clearTimeout(timer);
  }, [contdown]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="font-Cormorant text-center text-2xl font-bold text-gray-800">
        Você será redirecionado para o Google Maps ...
        <br />
        <br />
        {contdown}
      </h1>
    </div>
  );
}
