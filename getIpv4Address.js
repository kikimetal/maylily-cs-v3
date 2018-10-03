const os = require('os')
function getLocalAddress() {
    let ifacesObj = {}
    ifacesObj.ipv4 = []
    ifacesObj.ipv6 = []
    let interfaces = os.networkInterfaces()

    for (let dev in interfaces) {
        interfaces[dev].forEach(function(details){
            if (!details.internal){
                switch(details.family){
                    case "IPv4":
                        ifacesObj.ipv4.push({name:dev, address:details.address})
                    break
                    case "IPv6":
                        ifacesObj.ipv6.push({name:dev, address:details.address})
                    break
                }
            }
        })
    }
    return ifacesObj
}

function getIpv4Address () {
  return getLocalAddress().ipv4[0].address
}

export default getIpv4Address
