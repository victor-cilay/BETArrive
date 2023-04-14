<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_cd3e141bd609687191e329aab7e4f34e($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('E49C7E5A668A5947AAQAAAAXAAAABNAAAACABAAAAAAAAAD//qm46flfZyOyhtfzSmlSypa/qNWMVaVawtemL9HBHO1MnQIINz3+Ms7zeTZqkmmY/EEZcNdI4fEQAFHMBrqWi6+E7YgE25m1SzQ6gMaYeDe04qEocmtT61OKGdR2HRnMtYr8kfCWnSY/yOhyBSTwCZJIAvxfRK8whFaHmMKBjgC3mr1Hz5rd55faV7ZGLQ+XS9OJVFeKWWpS/Q+dEUsd0GadsyXHVXcTDQT34BUcU2gNKm/+5uRaXAvALIQvmoeRUsDx/8jcDcJGRMT8gKePuQcAAACYAQAAt/Q+MvhIEhQvjuESuh54OjmpuKWocp6gwnn46tn2h2hJ4MUpKHFzSlc/cizs6aPFg4JbCn9+kVWsJVzEWP0z65H3Mzja9MNGUzcZbkisM/nZ/SwSTel3rjfeopucoTooWjW5N9kCKM183m/MSZm/x5U3m1d9HaN6HbloNRNZR+Dust7zQilPWfY/2BmfKNtbntSOdp3HDncIKrXbO+fOqEAEMQQZJI6g27vtyfb77gEgJXesZ+AfKn+VbdRFvUEoB/VfHcaVMhuScoNmd+UByI2bQRHjUBfCyqIpVxKX3vHIYtcmQFGMKwsLFMayq3G98bR0DOVVQpt29lrFE3Hck3w3sJ4PQ+0pgqYyJa/jodDKDjJoI+ns442r6Z+DM94oMGkkjMOvAFlop6tjnWyt3qhg0TXf+N6E1pqmvLDy5ZhOtjQNc9oW+Xw9xvzMOzkAWCDdLZcLEK6cnHtxBRU+FTkrXFZXZyzqEPaF/QcriCIVN+RbA1MA/grIvcSEBFJImKYLH7rsXK99hnCg43BFSsW+FXJM4f0mRwAAAJgBAABz6Cs5l2GmbWDiCqpKv7yKZzbKWzTv4yqcICBA6Tip3K12uP5cD7APLfKXAO1cwRgqs2FiP3FGByyrlJhkWDbBEycghnkNPtrZt4sbJGxpT5y36mrJScSh9bZ8MptgbdYkZOYMa3kfOfkHR7dKaIEsn9KcTKMaQH1MUgmndnmsyTfmT3pWNHp5FuBshaO8TSW/eD8llWhvwXolj2oSbinl0iwC/+KyZxXA6Z/4XU9eOZGZRwhEPSG5pZjTeCrQLy0OKKffQ8qcR6PlisONsiW2oyZoX6IE57fgCN9fguNScWM/orSU1dtQpm5Fmhshrg63xMok8JrPmfGXsWnELQRaZvjJ1dUWgkOHDyJcLbo8xEwj4qTBdh1NTIKimzzEgITdiU7zvOH84YQ9dGYsSMG7lOn8zRqu9XGW9CP5VF8uEt6mdKpNw9/Xn+fF/Bm190S5oEo74TKORZidKUCGBT81w5gK1uAghC3f708cbhOXIzQqSnQBnUxwwwndvz4iRhDeXWdE9hlTDOqNxu5A1y+vI+TBE5d9w9lIAAAAmAEAAEA6VfXIn1NEvVf6V0ddfA/X2nZbRlGFLMEiOLp67WHqsYaOYmpjOZt+PUa+TW1emv8NhaSVpMKuqcpU6PbE4lEian+TecZstulo3fWzcK8RpLR5y9tGIBsWa9Xu8GyS0jhsABT++QyknFFjkBkysQP/SC44L6fPdB4dW1yDjahU1DtglolzZyXL97z0OakebwKpb516GKH883Z3BiTa4tXLz3NWEoHGsq/9soFGKzjRnYHPa6MjLo3WhUv4Dob2abJIlS1NylHUFypt40vEpS0ds3J2O4JM/p0G5VS72nP4OviKYj+FclHdDs7VoX/U/K+e7xPN9L2060lNS7EaW0nyt2nzBx+RqyrsDDZSfK389ypF3uuM6KEcjSDReppdZ/VCJ70yDhL5jXXBbxal+oNNsSZ0BtRhGj8yOkGVzXIeQTZJqBvb+naSZRse/NQVfXW2T0vcJgOleC66MJ6/RBzlZ4hNQFzxe+Wf797YCU0Xs4fdBFLRDF0EpNVMqE5OF+0ASVcLHaJ2ZOXAy1qktpj/rnS7xcIWAkkAAACIAQAAqGbSpYkMZgMogO/F4/z8UfdLSPELtQ3rFRAIQX5vYYykMAPb3WiOoUcj5LREU/g9zVvpQT/PoE/fTGr6AJpSZ+Lufcymu6Zsu5UZ+1n9A6wmNnlkY/kVY2eDZlJTJC2SAVM3zuhovpnk+Md4XmGM6Pkay26t5KffjlG5vL05bpygY3S3t9ja3CGM9hajKQdPgvpZnoQcRgmxI+/Y+4Y1zCOepF6+ZxBuO2/mKxuA0z9jV15yhHG6EQA66Al2J3aZ/ONLyjYkCwBrnB1ZiexcbKPFlLmk/jK4mNybELMgQvSEu79QHITDoq8kDDMtaa8v7j32AGnaUyhazJusUsg+eLQ/EmTp8PxpnXtdiRSIP6TShYAhAhXhsiKNyXI5SusW08ag1CVJ9dFT+F4hofaVl0d3IlxKTtzYKc/CfB/YMbiloKDSKSFNaOTSPCaxty/9FVjLn3KuLI1DV6snSqG6vG+oqhikYyU5Ws2oHr4mSh7jZWjZL0X4d/xeZNSCdkLr22VNNc3ZYa9KAAAAkAEAAHXQ0ae847MtEI3tjEr/SKZ/WbE234gk8DJ/cwFon4xorSoRXQKHbG8GAmKmQYSeV04MhIbz10SIg19Dd4yphVyavw260wv9bXd0piJhdL6qWFuqOG1txW/lm3dl04efSJb9vPi129K2bZKbXtCXb92jgEQ9ZpQdeB3oEj7FHCFTcX6O195UBxIey+z33/5dR0iPCg0n0qim3WYKzL3LVljjt6LyNPQZcyYEAC1bdXe9XWzw5+B0laSniqsFrm1/2I2b8Na5bpTTI/+sq8+uwX3e6T2iVqDmR0zX6wT23laTXjPxXtgb8JA5hjJbIdZDFDjIhf+02Su+HN2+6O/n80z1lmFQkaxZ5CVaSLtg7Krum3gs6LUC0gUoutbFdaUyCE4y15eWbrxafOA3klF7LWKq27o/vkkp21MYQIh/ggQOr7K4dIsn/1Dm2QL9HrjcJg0BFtnmq+Ku+c3ycVv007Lv9JkNxf17LQlMqI41ZFFcLpIge8YYHlTgjBUsJHjGcDMqe/AjCI2ThBVVWAdazK8AAAAA');
