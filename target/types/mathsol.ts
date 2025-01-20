export type Mathsol = {
  "version": "0.0.1",
  "name": "mathsol",
  "constants": [
    {
      "name": "COLLECTION_SEED",
      "type": "string",
      "value": "\"Collection\""
    },
    {
      "name": "TOKEN_SEED",
      "type": "string",
      "value": "\"Token\""
    },
    {
      "name": "FAIR_LAUNCH_SEED",
      "type": "string",
      "value": "\"FairLaunch\""
    },
    {
      "name": "FAIR_LAUNCH_VALUT_SEED",
      "type": "string",
      "value": "\"FairLaunchVault\""
    },
    {
      "name": "FAIR_LAUNCH_USER_SEED",
      "type": "string",
      "value": "\"FairLaunchUser\""
    },
    {
      "name": "LUCKY_BOX_SEED",
      "type": "string",
      "value": "\"LuckyBox\""
    },
    {
      "name": "LUCKY_BOX_USER_SEED",
      "type": "string",
      "value": "\"LuckyBoxUser\""
    }
  ],
  "instructions": [
    {
      "name": "createCollection",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "collectionMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "createToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "tokenDecimals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "luckyBoxInitialize",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "luckyBoxAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signer",
          "type": "publicKey"
        },
        {
          "name": "mintStartTime",
          "type": "i64"
        },
        {
          "name": "swapStartTime",
          "type": "i64"
        },
        {
          "name": "seedNftCount",
          "type": "u64"
        },
        {
          "name": "mintPrice",
          "type": "u64"
        },
        {
          "name": "taxer",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "luckyBoxUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "luckyBoxAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signer",
          "type": "publicKey"
        },
        {
          "name": "mintStartTime",
          "type": "i64"
        },
        {
          "name": "swapStartTime",
          "type": "i64"
        },
        {
          "name": "seedNftCount",
          "type": "u64"
        },
        {
          "name": "mintPrice",
          "type": "u64"
        },
        {
          "name": "taxer",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "luckyBoxMintNft",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "luckyBoxAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "taxerIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMetadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "luckyBoxSwap",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "luckyBoxAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "用户签名验证"
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchInitialize",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signer",
          "type": "publicKey"
        },
        {
          "name": "startTime",
          "type": "i64"
        },
        {
          "name": "drawPrice",
          "type": "u64"
        },
        {
          "name": "solRefundAmount",
          "type": "u64"
        },
        {
          "name": "tokenClaimAmount",
          "type": "u64"
        },
        {
          "name": "managerRate",
          "type": "u64"
        },
        {
          "name": "teamRate",
          "type": "u64"
        },
        {
          "name": "poolRate",
          "type": "u64"
        },
        {
          "name": "manager",
          "type": "publicKey"
        },
        {
          "name": "team",
          "type": "publicKey"
        },
        {
          "name": "pool",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fairLaunchUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signer",
          "type": "publicKey"
        },
        {
          "name": "startTime",
          "type": "i64"
        },
        {
          "name": "drawPrice",
          "type": "u64"
        },
        {
          "name": "solRefundAmount",
          "type": "u64"
        },
        {
          "name": "tokenClaimAmount",
          "type": "u64"
        },
        {
          "name": "managerRate",
          "type": "u64"
        },
        {
          "name": "teamRate",
          "type": "u64"
        },
        {
          "name": "poolRate",
          "type": "u64"
        },
        {
          "name": "manager",
          "type": "publicKey"
        },
        {
          "name": "team",
          "type": "publicKey"
        },
        {
          "name": "pool",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fairLaunchInitializeUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "fairLaunchReallocUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "count",
          "type": "u64"
        }
      ]
    },
    {
      "name": "fairLaunchDraw",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "managerIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "teamIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "fairLaunchBatchDraw",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "managerIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "teamIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "count",
          "type": "u64"
        }
      ]
    },
    {
      "name": "fairLaunchRefund",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "drawId",
          "type": "u64"
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchBatchRefund",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "drawIds",
          "type": {
            "vec": "u64"
          }
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchClaim",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "drawId",
          "type": "u64"
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchBatchClaim",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "drawIds",
          "type": {
            "vec": "u64"
          }
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchEmergencyWithdraw",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK, receive sol"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "fairLaunchAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "startSlot",
            "type": "u64"
          },
          {
            "name": "endSlot",
            "type": "u64"
          },
          {
            "name": "nextDrawId",
            "type": "u64"
          },
          {
            "name": "drawPrice",
            "type": "u64"
          },
          {
            "name": "solRefundAmount",
            "type": "u64"
          },
          {
            "name": "tokenClaimAmount",
            "type": "u64"
          },
          {
            "name": "managerRate",
            "type": "u64"
          },
          {
            "name": "teamRate",
            "type": "u64"
          },
          {
            "name": "poolRate",
            "type": "u64"
          },
          {
            "name": "manager",
            "type": "publicKey"
          },
          {
            "name": "team",
            "type": "publicKey"
          },
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "signer",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "fairLaunchUserAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "drawIds",
            "type": {
              "vec": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "luckyBoxUserAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "nftId",
            "type": "u64"
          },
          {
            "name": "mintTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "luckyBoxAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintStartTime",
            "type": "i64"
          },
          {
            "name": "swapStartTime",
            "type": "i64"
          },
          {
            "name": "seedNftCount",
            "type": "u64"
          },
          {
            "name": "nextNftId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "signer",
            "type": "publicKey"
          },
          {
            "name": "mintPrice",
            "type": "u64"
          },
          {
            "name": "taxer",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "FairLaunchClaimEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "drawId",
          "type": "u64",
          "index": false
        },
        {
          "name": "claimAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "FairLaunchDrawEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "drawId",
          "type": "u64",
          "index": false
        },
        {
          "name": "drawPrice",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "FairLaunchStarted",
      "fields": [
        {
          "name": "slot",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "FairLaunchRefundEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "drawId",
          "type": "u64",
          "index": false
        },
        {
          "name": "refundAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "LuckyBoxMintNFTEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "referrer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nftId",
          "type": "u64",
          "index": false
        },
        {
          "name": "mintPrice",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MintNotYetStarted",
      "msg": "mint activity not yet started."
    },
    {
      "code": 6001,
      "name": "MintEnded",
      "msg": "mint activity already ended."
    },
    {
      "code": 6002,
      "name": "DuplicateMint",
      "msg": "duplicate mint."
    },
    {
      "code": 6003,
      "name": "InvalidSignature",
      "msg": "invalid signature."
    },
    {
      "code": 6004,
      "name": "FairLaunchInvalidDrawId",
      "msg": "invalid draw id."
    },
    {
      "code": 6005,
      "name": "OverTokenRate",
      "msg": "invalid token share rate."
    },
    {
      "code": 6006,
      "name": "OverNftTaxRate",
      "msg": "invalid nft tax share rate."
    },
    {
      "code": 6007,
      "name": "InvalidManager",
      "msg": "invalid manager account in."
    },
    {
      "code": 6008,
      "name": "InvalidTeam",
      "msg": "invalid team account in."
    },
    {
      "code": 6009,
      "name": "InvalidPool",
      "msg": "invalid pool account in."
    },
    {
      "code": 6010,
      "name": "InvalidTaxer",
      "msg": "invalid taxer account in."
    }
  ]
};

export const IDL: Mathsol = {
  "version": "0.0.1",
  "name": "mathsol",
  "constants": [
    {
      "name": "COLLECTION_SEED",
      "type": "string",
      "value": "\"Collection\""
    },
    {
      "name": "TOKEN_SEED",
      "type": "string",
      "value": "\"Token\""
    },
    {
      "name": "FAIR_LAUNCH_SEED",
      "type": "string",
      "value": "\"FairLaunch\""
    },
    {
      "name": "FAIR_LAUNCH_VALUT_SEED",
      "type": "string",
      "value": "\"FairLaunchVault\""
    },
    {
      "name": "FAIR_LAUNCH_USER_SEED",
      "type": "string",
      "value": "\"FairLaunchUser\""
    },
    {
      "name": "LUCKY_BOX_SEED",
      "type": "string",
      "value": "\"LuckyBox\""
    },
    {
      "name": "LUCKY_BOX_USER_SEED",
      "type": "string",
      "value": "\"LuckyBoxUser\""
    }
  ],
  "instructions": [
    {
      "name": "createCollection",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "collectionMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "createToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "tokenDecimals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "luckyBoxInitialize",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "luckyBoxAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signer",
          "type": "publicKey"
        },
        {
          "name": "mintStartTime",
          "type": "i64"
        },
        {
          "name": "swapStartTime",
          "type": "i64"
        },
        {
          "name": "seedNftCount",
          "type": "u64"
        },
        {
          "name": "mintPrice",
          "type": "u64"
        },
        {
          "name": "taxer",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "luckyBoxUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "luckyBoxAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signer",
          "type": "publicKey"
        },
        {
          "name": "mintStartTime",
          "type": "i64"
        },
        {
          "name": "swapStartTime",
          "type": "i64"
        },
        {
          "name": "seedNftCount",
          "type": "u64"
        },
        {
          "name": "mintPrice",
          "type": "u64"
        },
        {
          "name": "taxer",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "luckyBoxMintNft",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "luckyBoxAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "taxerIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMetadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "luckyBoxSwap",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "luckyBoxAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "用户签名验证"
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchInitialize",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signer",
          "type": "publicKey"
        },
        {
          "name": "startTime",
          "type": "i64"
        },
        {
          "name": "drawPrice",
          "type": "u64"
        },
        {
          "name": "solRefundAmount",
          "type": "u64"
        },
        {
          "name": "tokenClaimAmount",
          "type": "u64"
        },
        {
          "name": "managerRate",
          "type": "u64"
        },
        {
          "name": "teamRate",
          "type": "u64"
        },
        {
          "name": "poolRate",
          "type": "u64"
        },
        {
          "name": "manager",
          "type": "publicKey"
        },
        {
          "name": "team",
          "type": "publicKey"
        },
        {
          "name": "pool",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fairLaunchUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signer",
          "type": "publicKey"
        },
        {
          "name": "startTime",
          "type": "i64"
        },
        {
          "name": "drawPrice",
          "type": "u64"
        },
        {
          "name": "solRefundAmount",
          "type": "u64"
        },
        {
          "name": "tokenClaimAmount",
          "type": "u64"
        },
        {
          "name": "managerRate",
          "type": "u64"
        },
        {
          "name": "teamRate",
          "type": "u64"
        },
        {
          "name": "poolRate",
          "type": "u64"
        },
        {
          "name": "manager",
          "type": "publicKey"
        },
        {
          "name": "team",
          "type": "publicKey"
        },
        {
          "name": "pool",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fairLaunchInitializeUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "fairLaunchReallocUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "count",
          "type": "u64"
        }
      ]
    },
    {
      "name": "fairLaunchDraw",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "managerIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "teamIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "fairLaunchBatchDraw",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "managerIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "teamIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "count",
          "type": "u64"
        }
      ]
    },
    {
      "name": "fairLaunchRefund",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "drawId",
          "type": "u64"
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchBatchRefund",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "drawIds",
          "type": {
            "vec": "u64"
          }
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchClaim",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "drawId",
          "type": "u64"
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchBatchClaim",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ixSysvar",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "drawIds",
          "type": {
            "vec": "u64"
          }
        },
        {
          "name": "signature",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "fairLaunchEmergencyWithdraw",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunchAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK, receive sol"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "fairLaunchAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "startSlot",
            "type": "u64"
          },
          {
            "name": "endSlot",
            "type": "u64"
          },
          {
            "name": "nextDrawId",
            "type": "u64"
          },
          {
            "name": "drawPrice",
            "type": "u64"
          },
          {
            "name": "solRefundAmount",
            "type": "u64"
          },
          {
            "name": "tokenClaimAmount",
            "type": "u64"
          },
          {
            "name": "managerRate",
            "type": "u64"
          },
          {
            "name": "teamRate",
            "type": "u64"
          },
          {
            "name": "poolRate",
            "type": "u64"
          },
          {
            "name": "manager",
            "type": "publicKey"
          },
          {
            "name": "team",
            "type": "publicKey"
          },
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "signer",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "fairLaunchUserAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "drawIds",
            "type": {
              "vec": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "luckyBoxUserAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "nftId",
            "type": "u64"
          },
          {
            "name": "mintTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "luckyBoxAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintStartTime",
            "type": "i64"
          },
          {
            "name": "swapStartTime",
            "type": "i64"
          },
          {
            "name": "seedNftCount",
            "type": "u64"
          },
          {
            "name": "nextNftId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "signer",
            "type": "publicKey"
          },
          {
            "name": "mintPrice",
            "type": "u64"
          },
          {
            "name": "taxer",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "FairLaunchClaimEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "drawId",
          "type": "u64",
          "index": false
        },
        {
          "name": "claimAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "FairLaunchDrawEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "drawId",
          "type": "u64",
          "index": false
        },
        {
          "name": "drawPrice",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "FairLaunchStarted",
      "fields": [
        {
          "name": "slot",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "FairLaunchRefundEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "drawId",
          "type": "u64",
          "index": false
        },
        {
          "name": "refundAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "LuckyBoxMintNFTEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "referrer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nftId",
          "type": "u64",
          "index": false
        },
        {
          "name": "mintPrice",
          "type": "u64",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MintNotYetStarted",
      "msg": "mint activity not yet started."
    },
    {
      "code": 6001,
      "name": "MintEnded",
      "msg": "mint activity already ended."
    },
    {
      "code": 6002,
      "name": "DuplicateMint",
      "msg": "duplicate mint."
    },
    {
      "code": 6003,
      "name": "InvalidSignature",
      "msg": "invalid signature."
    },
    {
      "code": 6004,
      "name": "FairLaunchInvalidDrawId",
      "msg": "invalid draw id."
    },
    {
      "code": 6005,
      "name": "OverTokenRate",
      "msg": "invalid token share rate."
    },
    {
      "code": 6006,
      "name": "OverNftTaxRate",
      "msg": "invalid nft tax share rate."
    },
    {
      "code": 6007,
      "name": "InvalidManager",
      "msg": "invalid manager account in."
    },
    {
      "code": 6008,
      "name": "InvalidTeam",
      "msg": "invalid team account in."
    },
    {
      "code": 6009,
      "name": "InvalidPool",
      "msg": "invalid pool account in."
    },
    {
      "code": 6010,
      "name": "InvalidTaxer",
      "msg": "invalid taxer account in."
    }
  ]
};
