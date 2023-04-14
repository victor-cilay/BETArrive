<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_0505cefcc103a01765898dde272d88b9($e,$m){

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
return sg_load('E49C7E5AEE0D9B9AAAQAAAAXAAAABNAAAACABAAAAAAAAAD/xZrh7XeDHGLbyl2E6RcxeIA/+y3env2PRzS5jJYXVJBxYJyr3qm8USYnZc/daaCCgZFm0P0kVH1DM4L1Gs4Y079R/yCsNrgA7lz8V4/0FjwicxKJwx4e8nvIUHB7VzdBYlF42ljthrbgI4afIkK1dzsiyKUUukejb1LgB2t+pgln/B9QTi2UPm/RlUMAqvgjCJxYPaL3hZzsgEEH/uBMGYQfs0gU+IBk13jDsPUMxndi3qxSQOedwt+mxWehj/2ngXpkgvsdXR248YuT/24vFQcAAACgAQAANM27mlPYTXg4P3OPoA1ZxsI6C+TpoRmJDxkhYqYkkW7fuD0nL5IYVMRX0qOa5mdu/7N5TUynkbKh54LnbzDVm6J1Y8U14157P17EBJVie+hK7M+1fyGmxCtO0DOckTDEH2p0Lze6IHpxk+92nnCYbl0KOMmqJTNrMeivFetmB5LBDsaLSVu9cBnijNZsM56/Ky95+4BJj99od8x4apUgyZlhPCtvIAC8FSVmNYQvR+APZi0PfLkhUoQpeLT2CtPPrQaKQT7fhkZCAyFvsEY28idHKkGElIavhRHqTSJ3Dgvms3z6/Y+2xy5CFVN5w6gz+ZFiUZTMt8W/7kBVYTKveMipu3ig59Ektjv8cuAlaOGUao46ssqEX5LQ+IWa6xuQLHJ130mnQjVpMTLONDb+v7Rt3nM7Ftl9B7tx6UwCV6cpKlPtirIpwAovWAxsxJ6H5rLTnLgV37VluQTZIPdozi9s+llaVgn6VxWng50ieXju1jKDYxKyTxgW3gwg0FHfZ4yO7hU+Mu3OvRI/yBPHl2ej+pnEn77ZT6bNmptD/rhHAAAAoAEAANEjuALF6KFVnLGUhvtd5Pi2c6MawzhsQHTamZ15PkpGWC/l6eeEnkaxbI/4Z1iK/5HmYMt010crwB/JKMhECDfY4XHHjCKrArfFTiq+XTWO8BLYGVlfUrrA5R9nBLdRZ5TEuz/oF6/vZ7nIzzzNFamcnHiC2tmB5LEOI8de+NbQZTEFDpHnf9cKK1qq/cNrCz6hUivqosf1mYpIrvmfA/8b3lO/iLUVeAnsBBrhP+Xom01Ga5C7CLTG0cJmJcXcuSJTIDh03v5Bsi67R943BbMWCGJvd6bc1MbIAcYW3XEraoomrvt1yDrW5modV0bJIWgH0WXpOn4V9Kwtp4/snujT+5c4IAshHnaXp1wfmKDO0mRLbpnIFjO/7KpzFb5F+/3lsfVbxwJ0J8Q69gjWZY9XC7538GfQ0egncMLzx84eoxJN+4NY7qAsWWxRnMTpH76YVobkoySjKY2yaQnbx2EqG8RgXtqiZ+/dhtnpqe+kxjzDsu5Cyekh72RuHbK7jqmRVU5PXaRyjRk3HfBQMFbhjYG6VZwuVVHnIUORqi5FSAAAAKgBAAACSGMnyX0AmgthmmZ4gI9F5ou7ZttadzfNDhunNEQKFGRk51ISi2MSyxlzfsaPgRkia9O0Pw7D+s/TZ9+hUaUp37/Eg0tI9ToK+LjlF92blDVR6G5sU1Ev8yipfcnJ3JNGGhpBdoaJUKADe5H4RYxRBErQ/02AZfXBmbDT3drw6sL2zVFTxL350NDWlly3Vxa7mv12AI5vJbJpFkzjjriG+DtYMzgIxGpnPVD6BxwW2l8Fkr13ylY9RKgZuEvIwAsvu90doO+Aj5d4X8gAhu3td7Q6/zEeAD9mTTBuCUC8AkZIBrOOOabR2qQOvLCBnB4WNdUI4+MZTfKy1J1F7UEU2U5VYoIPFjtlzmQq5iD6sSsLans+3hbpyMS8gnpgibR+/1q7/2Twb5aaEAgwzf6PSDrafEr9ktGZu/TmOHwGZQSiqF64nJc1CBUJqq8pUfy0ChMmcU20X+OcbOKCkLE73uq+Azw2+3iyP/Nj7u5gpDgwRFQZowGG2haTMtHaaDfFr71TLzL2VWimIa/Y0QhnAF5T9gStPPoEHir0wMXIkv6HAKFvZjXUSQAAAJABAABQVyHSdi71MJ+v9hfn4ixHTrsBS7RvKz+zQJ3g8HKpXjpgevGw992uOaKQ+ULVO3qc3TOrZU3ShgaVll6AQDg4LAOom7yDYe4b9rxlaqEWqm+/gmHkTGfYnAhDXcN83b3CJsK79EP3bqQFqMS8UL8HISHswf7KbVrUjMGfea5WfzVk4iRAGWytPvWjkim8mKTeGeN8utYMx0ckw8tOos8Ymgsfz1VKb0kwWxsaPzTO/x964SEex/ppp/j40ZuFN2Pl7CwbA+1x2QVh1gJJqi8ukqUMIZHfqNg2NlKW3Kk6EjRhjXoCRqlp1wZtPwZbXiq2SodwGdAJ8eBAVEcIzsNZe0wcnouFT46mQ2KP+ZW+LJlb+Slsc0RjWXpBx1FhkZQZES570nYWA5SMlaquTtnCgBl514QBUGFPce8DNh+hx+cFaT2tHspfQR3LdS/1GLh/3SJ3XH30dm0jNvy4jfL6Dn98/RdUfSoWPD8ZRykrwX2SUp+8AqqmkWA0146H8XBJto/ojc0jyBXHywHAmiHrSgAAAJABAABVfR6EwG7PeFw6x7iDRji/wje2g7hOiTQqE7LZe7NmY3J+E3h17YKzariOhbTrQtplr6R8yrPzQ95kqj/bTG2ecU2D2e82TLVSV8Aiv8uGJaVmiWuReWTloLXTJggfIYiHGjAf4yYEaUqUhokQkIReXzWLFPONus0UdLtjCRR8uf3xNvOBWkxDQ2fGYp9wmSk0PlCyzFg5mdhi9GlCmJFatL/LJ80Ka3TBimJRriSTvqyY55SMyhsi9KStW6NA3QUhAZ1sboN3WrfLjRZjXZn6SKMnaBZNA7+uYIT38UU3uP5kdflUc/8L+EVkuhbUCZrynL3AxqLOXd0oDYrgA8N+qxYDcDrw/4KgPAutIDpMdJ8tXSta/vMiaoG+eBk9Tj76/UEJyO5HugGH9ohpjdnhjFMsoConNCvhr+O6f9qq1MbZc/YWZSzLTNANghAnZLlJ35i4fPSKP0UZv2DErK651uadVSH4+pgrpxm7g7mE/SmWpGmXFofBBJC7Bj6gGnEuDeoLpC5GX4RgomLAmKNuAAAAAA==');
