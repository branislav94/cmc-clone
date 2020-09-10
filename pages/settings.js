import Link from 'next/link'

function Settings() {
  return (
    <div className="bg-gray-100 py-4 px-3 flex justify-between">
      <div className="flex-col justify-between">
        <h1 className="animate-wiggle font-medium">Settings</h1>
        <span className="text-xs text-gray-400">Total Holdings</span>
        <div className='flex justify-between mt-4'>
          <p>App</p>
          <p>App Version 1.0.1</p>
        </div>
        <div className="my-2 rounded-lg bg-white shadow-md text-sm">
          <div className="flex p-4 justify-between">
            <p>Account Settings</p>
            <ArrowIcon className="w-7 h-7" />
          </div>
          <div className="border-t flex p-4 justify-between">
            <p>Launch Screen</p>
            <div className="flex">
              <p>Prices</p><ArrowIcon className="w-7 h-7" />
            </div>
          </div>
          <div className="border-t flex p-4 justify-between">
            <p>Switch to Night Mode</p>
            <SunIcon className="text-gray-500 w-5 h-5" />
          </div>
          <div className="border-t flex p-4 justify-between">
            <p>Default Currencies</p>
            <div className="flex">
              <p>USD & BTC</p><ArrowIcon className="w-7 h-7" />
            </div>
          </div>

        </div>

        <Link href="apk/cmc-clone-v1.1">
          <img className="my-5 w-full" src="/icons/global-playstore.png" alt="Play Store" />
        </Link>

        
        <div className='flex mt-4'>
          <p>About</p>
        </div>
        <div className="my-2 rounded-lg bg-white shadow-md text-sm">
          <div className="border-t flex p-4 justify-between">
            <p>Newsletter</p>
            <div className="flex">
              <ArrowIcon className="w-7 h-7" />
            </div>
          </div>
          <div className="border-t flex p-4 justify-between">
            <p>Report a Bug</p>
            <SunIcon className="text-gray-500 w-5 h-5" />
          </div>
          <div className="border-t flex p-4 justify-between">
            <p>Give Feedback</p>
          </div>
          </div>
      </div>
    </div >

  )
}

export default Settings;
function ArrowIcon({ className }) {
  return (
    <svg className={`fill-current stroke-current stroke-0 ${className}`}
      className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
      );
}

function SunIcon({ className }) {
  return (
<svg className={`fill-current stroke-current stroke-0 ${className}`}
fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
      );
    }