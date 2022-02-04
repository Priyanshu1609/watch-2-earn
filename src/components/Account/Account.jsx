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
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      enableWeb3({ provider: connectorId });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  if (!isAuthenticated || !account) {
    return (
      <>
        <div className="m-5" id="button">
          <button
            className="mx-auto transition duration-150 ease-in-out hover:bg-indigo-500 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
            onClick={metaMaskAuthentication}
          >
            <p className="color-white">Authenticate</p>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <p>{getEllipsisTxt(account, 6)}</p>
        <Blockies seed={account.toLowerCase()} size={8} scale={4} />
      </div>
    </>
  );
}

export default Account;