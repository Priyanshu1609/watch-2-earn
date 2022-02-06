import React from "react";
import { useEffect, useMemo, useState } from "react";
import watch2EarnContract from "contracts/Watch2EarnFactory.json";

import { useMoralis, useChain } from "react-moralis";

import { useAPIContract } from "hooks/useAPIContract";
import useBiconomyContext from "hooks/useBiconomyContext";
import useMetaTransaction from "hooks/useMetaTransaction";

export default function ClaimReward() {
  const { isInitialized, isWeb3Enabled, account, Moralis } = useMoralis();
  const { chainId } = useChain();
  const { isBiconomyInitialized, biconomyProvider } = useBiconomyContext();
  const { contractName, abi } = watch2EarnContract;
  const [isEdit, setIsEdit] = useState(false);

  const contractAddress = "0x68451B35b50e415A97673C9B0049aEDa934Fc544";
  const Watch2EarnContractAddress =
    "0x8A3d30A8fcA024CbFcf9CF1912b3b90a17FB71F7";
  const { runContractFunction, contractResponse, isLoading } = useAPIContract();

  const { isMetatransactionProcessing, onSubmitMetaTransaction } =
    useMetaTransaction({
      input: Watch2EarnContractAddress,
      transactionParams: {
        from: account,
        signatureType: biconomyProvider["PERSONAL_SIGN"],
      },
    });

  //   const onGetPauseState = ({ onSuccess, onError, onComplete }) => {
  //     runContractFunction({
  //       params: {
  //         chain: chainId,
  //         function_name: "paused",
  //         abi,
  //         address: contractAddress,
  //         params: {
  //           contractAddress: Watch2EarnContractAddress,
  //         },
  //       },
  //       onSuccess,
  //       onError,
  //       onComplete,
  //     });
  //   };

  const onGetPauseState = async () => {
    const sendOptions = {
      contractAddress: contractAddress,
      functionName: "paused",
      abi: abi,
      params: {
        contractAddress: Watch2EarnContractAddress,
      },
    };

    const transaction = await Moralis.executeFunction(sendOptions);
    console.log(transaction.hash);
    // --> "0x39af55979f5b690fdce14eb23f91dfb0357cb1a27f387656e197636e597b5b7c"

    // Wait until the transaction is confirmed
    // const tx = await transaction.wait();
    // console.log(tx);

    // --> "Hello Moralis"
  };

  const onSubmit = async (e) => {
    await e.preventDefault();

    onSubmitMetaTransaction({
      onConfirmation: () => {
        onGetPauseState({
          onSuccess: () => {
            console.log("Success");
          },
        });
      },
      onError: () => {
        console.log("Error");
      },
    });
  };

  useEffect(() => {
    /**
     * Running when one of the following conditions fulfilled:
     * - Moralis SDK is Initialized
     * - Web3 has been enabled
     * - Connected Chain Changed
     */
    if (isInitialized && isWeb3Enabled) {
      onGetPauseState();
    }
  }, [isInitialized, isWeb3Enabled, contractAddress, abi, chainId]);

  return (
    <>
      <div id="button">
        <button
          className="mx-auto transition duration-150 ease-in-out bg-[#00B48Cff] rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
          onClick={onSubmit}
        >
          <p className="color-white">Claim Reward</p>
        </button>
      </div>
    </>
  );
}
