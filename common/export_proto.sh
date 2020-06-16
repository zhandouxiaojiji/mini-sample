pbjs -t static-module -w commonjs -o proto.js proto/*.proto
pbts -o ../client/proto.d.ts proto.js