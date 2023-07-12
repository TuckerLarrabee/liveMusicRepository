const aws = require('aws-sdk')
require('dotenv').config()


module.exports = async function awsCall () {
    let audioFileArr = []

    try {
        aws.config.setPromisesDependency()
        aws.config.update({
            accessKeyId: process.env.ACCESS_KEY,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            region: 'us-east-1'
        })
        
        const s3 = new aws.S3()
        const response = await s3.listObjectsV2({
            Bucket: process.env.BUCKET_NAME
        }).promise()
        
        response.Contents.forEach(Object => {
            audioFileArr.push(`https://audiofilebucketlarrabee.s3.amazonaws.com/${Object.Key}`)
        })

        return audioFileArr
        
    } catch (e) {
        console.log("our error", e)
    }
}