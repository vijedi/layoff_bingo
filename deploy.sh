#!/bin/bash

. ./.env

rm -rf build

npm run test-no-watch
npm run build 

pushd build/
aws s3 rm s3://${BUCKET_NAME} --recursive
aws s3 sync . s3://${BUCKET_NAME}
aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths '/index*'
popd
