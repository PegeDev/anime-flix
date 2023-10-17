import SpinnerIcon from "../../public/icons/spinner.svg";

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <SpinnerIcon className="text-white animate-spin" />
          <span className="text-lg text-white font-semibold">Loading ...</span>
        </div>
      </div>
    </div>
  );
}
