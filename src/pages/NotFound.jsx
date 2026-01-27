import { RiArrowDropRightLine } from 'react-icons/ri';
import Button from '../components/small/Button';
import { useNavigate } from 'react-router';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="mt-20 flex items-center justify-center pb-25">
      <div className="flex flex-col items-center gap-7.5">
        <div className="max-w-2xl">
          <img className="w-full" src="/notFound.png" alt="not-found" />
        </div>
        <div className="flex items-center flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-lg uppercase text-center text-primary">How It Works</p>
            <h3 className="text-center font-semibold text-[44px] text-primary">
              Oops! Page Not Found.
            </h3>
          </div>
          <Button
            onClick={() => navigate('/')}
            text="Return Home"
            icon={<RiArrowDropRightLine size={30} />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
