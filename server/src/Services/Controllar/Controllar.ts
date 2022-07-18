import orderManager from "../users/manageOrder";



const dydxClient = new orderManager();
const run = async () => {
    console.log( await dydxClient.cancleOrder("50234166642ab777c7517228ccadda3bf9c5667f636cadf930195bc80cee2b6"));
}
run()
