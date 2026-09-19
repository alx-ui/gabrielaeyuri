import { useNavigate } from 'react-router';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-screen">
      <div className="fixed box-border flex h-screen w-screen flex-row items-start justify-center overflow-auto bg-[#EFEFEF] py-20">
        <div className="my-auto flex w-full flex-col items-center p-5 md:w-[500]">
          <h5 className="font-Cormorant mb-2 text-center text-5xl font-medium text-gray-500 md:mb-3 md:text-6xl">
            404
          </h5>
          <h4 className="font-Cormorant mb-6 text-center text-2xl text-gray-800 md:text-3xl">
            Opa, essa página que você está procurando não existe!
          </h4>

          <button
            type="button"
            className="bg-primary outline-primary hover:bg-senary cursor-pointer rounded-md px-5 py-3 font-sans font-medium text-white outline-4 transition-all disabled:pointer-events-none disabled:opacity-50"
            onClick={() => navigate('/')}
          >
            Voltar para a página inicial
          </button>
        </div>
      </div>
    </div>
  );
}
