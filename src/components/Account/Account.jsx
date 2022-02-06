import { getEllipsisTxt } from "helpers/formatters";
import { useEffect } from "react";
import Blockies from "react-blockies";
import { useMoralis } from "react-moralis";

function Account() {
  const {
    authenticate,
    isWeb3Enabled,
    isWeb3EnableLoading,
    isAuthenticated,
    account,
    enableWeb3,
    logout,
    Moralis,
  } = useMoralis();

  const metaMaskAuthentication = async () => {
    try {
      await authenticate({
        provider: "injected",
        signingMessage: "Signing in to Watch2Earn",
      });
      window.localStorage.setItem("connectorId", "injected");
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");

    const doWeb3Enable = async () => {
      const connectorId = window.localStorage.getItem("connectorId");
      const walletWeb3 = await Moralis.enableWeb3();
    };

    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      // enableWeb3({ provider: connectorId });
      // doWeb3Enable();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  if (!isAuthenticated || !account) {
    return (
      <>
        <div id="button">
          <button
            className="mx-auto transition duration-150 ease-in-out bg-[#00B48Cff] rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
            onClick={metaMaskAuthentication}
          >
            <p className="color-white">Authenticate</p>
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="flex-row m-1 justify-center flex-1 flex">
      <div className="w-auto text-center p-2 text-white">
        {getEllipsisTxt(account, 6)}
      </div>
      <Blockies seed={account.toLowerCase()} size={8} scale={4} />
    </div>
  );
}

export default Account;
