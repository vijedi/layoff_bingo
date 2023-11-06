#!/bin/bash

. ./.env

npm run build 

pushd build/
aws s3 sync . s3://${BUCKET_NAME}
aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths '/index*'
popd
