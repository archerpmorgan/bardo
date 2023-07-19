import { BlockBlobClient } from '@azure/storage-blob';
import getStream from 'into-stream';

const containerName = 'audioFiles';
const connectionString = `DefaultEndpointsProtocol=https;EndpointSuffix=core.windows.net;AccountName=bardo;AccountKey=${process.env.AZURE_STORAGE_KEY};BlobEndpoint=https://bardo.blob.core.windows.net/;FileEndpoint=https://bardo.file.core.windows.net/;QueueEndpoint=https://bardo.queue.core.windows.net/;TableEndpoint=https://bardo.table.core.windows.net/`
console.log(connectionString)

const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    return `${identifier}-${originalName}`;
};

const handleError = (err, res) => {
    res.status(500);
    res.render('error', { error: err });
};

export default async function uploadFile(originalName, buffer){

    const
          blobName = getBlobName(originalName)
        , blobService = new BlockBlobClient(connectionString,containerName,blobName)
        , stream = getStream(buffer)
        , streamLength = buffer.length
    ;

    blobService.uploadStream(stream, streamLength)
    .then(
        ()=>{
            res.render('success', { 
                message: 'File uploaded to Azure Blob storage.' 
            });
        }
    ).catch(
        (err)=>{
        if(err) {
            handleError(err);
            return;
        }
    })
};
