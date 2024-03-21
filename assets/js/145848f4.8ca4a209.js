"use strict";(self.webpackChunkbitlayer=self.webpackChunkbitlayer||[]).push([[889],{9410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(4848),l=t(8453);const r={},o="Deployment",d={id:"build/dev/deploy",title:"Deployment",description:"Introduce systemd management configs.",source:"@site/docs/build/dev/deploy.md",sourceDirName:"build/dev",slug:"/build/dev/deploy",permalink:"/bitlayer/docs/build/dev/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/bitlayer-org/bitlayer/docs/docs/build/dev/deploy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON-RPC API METHODS",permalink:"/bitlayer/docs/build/dev/Compile and Run"},next:{title:"Genesis file",permalink:"/bitlayer/docs/build/dev/genesis"}},s={},c=[{value:"Hardware",id:"hardware",level:2},{value:"minimun",id:"minimun",level:3},{value:"recommended",id:"recommended",level:3},{value:"network&amp;port",id:"networkport",level:3},{value:"chain node",id:"chain-node",level:2},{value:"start bash",id:"start-bash",level:2},{value:"systemd config",id:"systemd-config",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsx)(n.p,{children:"Introduce systemd management configs."}),"\n",(0,i.jsx)(n.h2,{id:"hardware",children:"Hardware"}),"\n",(0,i.jsx)(n.h3,{id:"minimun",children:"minimun"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"8core\n16g\nssd iops>5k\n"})}),"\n",(0,i.jsx)(n.h3,{id:"recommended",children:"recommended"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"16core\n32g\nssd iops>5k\n"})}),"\n",(0,i.jsx)(n.h3,{id:"networkport",children:"network&port"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"External IP Address\nPort TCP/UDP 31031\n"})}),"\n",(0,i.jsx)(n.h2,{id:"chain-node",children:"chain node"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"config.toml"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[Eth]\nSyncMode = "snap"\nTrieCleanCacheRejournal= 300000000000\nTrieTimeout = 20000000000\n\n\n[Eth.Miner]\nGasFloor = 40000000\nGasCeil = 40000000\nGasPrice = 100000000\nRecommit = 3000000000\n\n\n[Eth.TxPool]\nNoLocals = true\nJournal = "transactions.rlp"\nRejournal = 600000000000\nPriceLimit = 100000000\nPriceBump = 10\nAccountSlots = 64\nGlobalSlots = 10240\nAccountQueue = 32\nGlobalQueue = 1024\nLifetime = 1800000000000\n\n[Node]\nDataDir = "/data/bitlayer-l2/chain/data"\nInsecureUnlockAllowed = true\nNoUSB = true\nIPCPath = "geth.ipc"\nHTTPHost = "0.0.0.0"\nHTTPPort = 8545\nHTTPCors = ["*"]\nHTTPVirtualHosts = ["*"]\nHTTPModules = [\'eth\', \'net\', \'web3\']\n\nWSHost = "0.0.0.0"\nWSPort = 8546\nWSModules = [\'eth\', \'net\', \'web3\']\n\nGraphQLVirtualHosts = ["localhost"]\n\n\n[Node.P2P]\nMaxPeers = 50\nNoDiscovery = false\nListenAddr = ":31031"\nEnableMsgEvents = false\n\n[Node.HTTPTimeouts]\nReadTimeout = 30000000000\nWriteTimeout = 30000000000\nIdleTimeout = 120000000000\n'})}),"\n",(0,i.jsx)(n.p,{children:"use snap sync in the config, if full needed - change this line"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'SyncMode = "snap"\n'})}),"\n",(0,i.jsx)(n.p,{children:"to"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'SyncMode = "full"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"start-bash",children:"start bash"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["To show full detail help info of all flags, type ",(0,i.jsx)(n.code,{children:"geth help"})," or ",(0,i.jsx)(n.code,{children:"geth -h"})]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"run.sh"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"#!/usr/bin/env bash\n/data/bitlayer-l2/chain/geth-linux-amd64 \\\n--config /data/bitlayer-l2/chain/config.toml  \\\n--log.file /data/bitlayer-l2/chain/logs/chain.log \\\n--log.rotate=true \\\n--authrpc.port 8445 \\\n--traceaction 2 \\\n--verbosity 3  >> /data/bitlayer-l2/chain/logs/systemd_chain_console.out 2>&1\n"})}),"\n",(0,i.jsx)(n.p,{children:"if you need to use it as archive node, add:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"--syncmode full \\\n--gcmode archive \\\n"})}),"\n",(0,i.jsx)(n.p,{children:"so:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"#!/usr/bin/env bash\n/data/bitlayer-l2/chain/geth-linux-amd64 \\\n--config /data/bitlayer-l2/chain/config.toml  \\\n--log.file /data/bitlayer-l2/chain/logs/chain.log \\\n--log.rotate=true \\\n--authrpc.port 8445 \\\n--traceaction 2 \\\n--syncmode full \\\n--gcmode archive \\\n--verbosity 3  >> /data/bitlayer-l2/chain/logs/systemd_chain_console.out 2>&1\n"})}),"\n",(0,i.jsx)(n.p,{children:"If no network flags were provided, the node will connect the bitlayer mainnet by default. If you want to connect to bitlayer testnet, add:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"--testnet\n"})}),"\n",(0,i.jsx)(n.h2,{id:"systemd-config",children:"systemd config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[Unit]\nDescription=bitlayer-l2 chain service\n\n[Service]\nType=simple\nExecStart=/bin/sh /data/bitlayer-l2/chain/run.sh\nWorkingDirectory=/data/bitlayer-l2/chain\nTimeoutSec=600\nRestart=on-failure\nRestartSec=5s\n\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const l={},r=i.createContext(l);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);