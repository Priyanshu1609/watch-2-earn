import { useState } from "react";
import useBiconomyContext from "./useBiconomyContext";

const useMetaTransaction = ({ input, transactionParams }) => {
  const { contract } = useBiconomyContext();
  const [isMetatransactionProcessing, setIsMetatransactionProcessing] =
    useState(false);
  const [error, setError] = useState();

  const onSubmitMetaTransaction = async ({ onConfirmation, onError }) => {
    try {
      setIsMetatransactionProcessing(true);
      // let tx = await contract.pause(input).send(transactionParams);
      console.log(contract);
      let tx = await contract.unpause(input);
      console.log("tx", tx);

      // tx.on("transactionHash", function () {})
      //   .once("confirmation", function (transactionHash) {
      //     setIsMetatransactionProcessing(false);
      //     onConfirmation(transactionHash);
      //   })
      //   .on("error", function (e) {
      //     setError(e);
      //     console.log(e);
      //     setIsMetatransactionProcessing(false);
      //     onError();
      //   });
    } catch (e) {
      setError(e);
      console.log(e);
      onError();
    }
  };

  return { error, isMetatransactionProcessing, onSubmitMetaTransaction };
};

export default useMetaTransaction;
