/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, useMemo } from "react";
import { useChain, useMoralis } from "react-moralis";
import { Biconomy } from "@biconomy/mexa";
import Web3 from "web3";
// import { notification } from "antd";
import { networkConfigs } from "helpers/networks";
// import simpleStorageContract from "contracts/SimpleStorage.json";
import watch2EarnContract from "contracts/Watch2EarnFactory.json";
// import simpleStorage from "list/simpleStorage.json";
import biconomyApiKey from "helpers/biconomy";

export const BiconomyContext = createContext({});

const BiconomyContextProvider = (props) => {
  const { children } = props;
  const {
    isWeb3Enabled,
    web3,
    isAuthenticated,
    isWeb3EnableLoading,
    enableWeb3,
    Moralis,
  } = useMoralis();
  const { chainId } = useChain();
  const [isBiconomyInitialized, setIsBiconomyInitialized] = useState(false);
  const [biconomyProvider, setBiconomyProvider] = useState({});
  const [contract, setContract] = useState({});
  const { abi } = watch2EarnContract;
  const contractAddress = "0x68451B35b50e415A97673C9B0049aEDa934Fc544"; //useMemo(() => simpleStorage[chainId], [chainId]);

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading && chainId) {
      const connectorId = window.localStorage.getItem("connectorId");
      enableWeb3();
      // enableWeb3({ provider: connectorId });
      console.log("hello");
    }
  }, [isAuthenticated, isWeb3Enabled, chainId]);

  useEffect(() => {
    const initializeBiconomy = async () => {
      console.log("web3", Moralis.web3);

      if (isBiconomyInitialized) {
        // Resetting when reinitializing
        setIsBiconomyInitialized(false);
      }
      const connectorId = window.localStorage.getItem("connectorId");

      const walletWeb3 = Moralis.web3 || (await Moralis.enableWeb3());
      console.log("walletWeb3", walletWeb3);
      const networkProvider = new Web3.providers.HttpProvider(
        networkConfigs[chainId]?.rpcUrl
      );
      console.log(web3.eth);
      const biconomy = new Biconomy(networkProvider, {
        walletProvider: walletWeb3.currentProvider,
        apiKey: "RwMg7k9wR.e4fa9993-3963-403e-9a4e-f2780a7fd418",
        debug: true,
      });
      setBiconomyProvider(biconomy);

      // This web3 instance is used to read normally and write to contt via meta transactions.
      // web3.setProvider(biconomy);
      const ethers = Moralis.web3Library;
      let ethersProvider = new ethers.providers.Web3Provider(biconomy);
      // web3.provider.Web3Provider(biconomy);
      console.log("abi", JSON.stringify(abi));

      biconomy
        .onEvent(biconomy.READY, () => {
          setIsBiconomyInitialized(true);
          const contractInst = new ethers.Contract(contractAddress, abi);
          setContract(contractInst);
          console.log("contractInst", contractInst);
          console.log("Biconomy READY");
        })
        .onEvent(biconomy.ERROR, (error, message) => {
          console.log("Biconomy Initialization Fail", error, message);
        });
    };

    if (isAuthenticated && isWeb3Enabled && chainId !== "0x1") {
      console.log("initttt");
      initializeBiconomy();
    }
  }, [
    isAuthenticated,
    isWeb3Enabled,
    chainId,
    web3,
    abi,
    contractAddress,
    Moralis,
  ]);

  return (
    <BiconomyContext.Provider
      value={{ isBiconomyInitialized, biconomyProvider, contract }}
    >
      {children}
    </BiconomyContext.Provider>
  );
};

export default BiconomyContextProvider;
