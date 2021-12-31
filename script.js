// import fs from 'f';
const fs = require( 'fs' )
const { GoogleSpreadsheet } = require( 'google-spreadsheet' )


const spreadSheetId = '13GKU9-dW4a2VSYk5AwKeEMPNGCfyaE7iJ9T9SnPRw5A'

let data = fs.readFileSync( 'inventory.csv' )
    .toString()
    .split( '\n' )
    .map( i => i.trim() )
    .map( i => i.split( ',' )
        .map( i => i.trim() )
        .filter( i => i !== '' )
    )

let csvString = ''

let targetData = data
    .filter( i => i[ 7 ] === 'Liquor' )
    .map( k => k
        .filter( ( i, index ) => {
            if ( index === 0 || index === 1 || index === 2 ) {
                return true
            }
            return false
        } )
    )
    .map( i => `${i[0]},${i[1]},${i[2]}\n`)
    .forEach( line => csvString += line)
    // .map( i => ( {
    //     id: i[ 0 ],
    //     name: i[ 1 ],
    //     price: i[ 2 ],
    // } ) )
// console.log( targetData )
// console.log( JSON.stringify( targetData, '', 2)

// console.log(csvString)

try {
    fs.writeFileSync('liquorItems.csv', csvString)
    //file written successfully
  } catch (err) {
    console.error(err)
  }

//     doTheThing()






async function doTheThing() {
    const doc = new GoogleSpreadsheet( spreadSheetId )

    try {

        await doc.useServiceAccountAuth( {
            client_email: 'sheets@magoos-334912.iam.gserviceaccount.com',
            private_key: '5f5302ef55379fc1599240272024db8cf26d14d8',
        } )

        await doc.addSheet( { headerValues: [ 'id', 'name', 'price' ] } )

        await doc.addRows( targetData )
    } catch ( e ) {
        console.log( e )
    }
}


