
require('dotenv').config({path: '../.env'})

export default { ETHEREUM_PRIVATE_KEY:process.env.ETHEREUM_PRIVATE_KEY ?? '',
HTTP_HOST:process.env.HTTP_HOST ?? '',
WEB3_PROIVDER_URL:process.env.WEB3_PROIVDER_URL ?? '',
INFURA_KEY:process.env.INFURA_KEY ?? '',
STRAKPRIVATEKEY:process.env.STRAKPRIVATEKEY ?? '',
API_KEY:process.env.API_KEY ?? '',    
PASSPHRASE:process.env.PASSPHRASE ?? '',
SECRET:process.env.SECRET ?? '',
NETWORK_ID:process.env.NETWORK_ID ?? 1,
POSITION_ID :process.env.POSITION_ID ?? 1,
   }