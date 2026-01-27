import { RiArrowDownSLine } from 'react-icons/ri';

function TopBar() {
  return (
    <div className="bg-primary text-white flex items-center justify-center py-3">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div></div>
        <div className="flex gap-2 items-center text-sm">
          <p>Bulk Orders Only — Special Pricing Available on Large Quantities</p>
          <span className="font-semibold underline cursor-pointer">ShopNow</span>
        </div>
        <div className="flex gap-3 items-center text-sm">
          <p>English</p>
          <span>
            <RiArrowDownSLine size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
