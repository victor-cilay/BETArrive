<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_80396de3a9977ca26352fea88be07d0a($e,$m){

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
return sg_load('E49C7E5A5F1B5C2EAAQAAAAXAAAABNAAAACABAAAAAAAAAD/cm64+Ly6ez1hlYXbgio2qZyzL+qW0Y0U8v/Ruofe420cEhqiCPqNrmF10j4eHavnrx9Ck2bgOKVHn59v1MuuvHSg8jKS8nSQhNViB4KQjKK9P47uTgl5zE5Ip8MMK0XpNFTTJLOOum+LXr5nRjc2OCOYYKmMSuh3R2klbm+U4W0R0hJktOivbCSxo+2BOWezc7/OxmT/EkIwGqDllVPDgac6/+UVxqTta7DlDOLekCWreWOZMZX4CR73L/MuFGZVs4xfxugrJnb/zgxsEU7FcgcAAAC4AAAAGN6kROrNKVqfQSdIokWHZrLegob7TQRwzPtZoiLfbb+eemi/PjBiEYtr6Dr8rtAwiBEd9wu96wXxEZpwP5zuP5eFpOUjXKeyFZg/lmt6HuOUL297QMbsWbR1g/bXWCtry056AWOLvASrvhGia1NUPKBiapnsGqZ1q7Y4s6qa1JS/4XiJIKtYODiwCpZ1ZP+pvXE4B7rj4PCLe7dSq1UfI/mBZwzUHE5/xgMp149fBw5Fd2whl4tYn0cAAAC4AAAAyzqRVu2A1r91dlcRH/dODBgKc1f0yt/a/afqplpa4o3vNrNX/Ayu47PnURkkRpZvw9tn5Uo8DoTYr9tAQPfEJVBIVvvy+MKzPDpOJd5rQ0/BlYznk1AUiuuFGyZftCqtQPg+M9o/Zn164Gp5lsB7QzuWl5JniKZBm5kiglM8D9K0HdGRYSlfCrqr0udYRNEzA+fMO74zPyr+zheHS1lWF9clRn8nLRq1pM2+hDKHGAP952bB3csKAUgAAAC4AAAAgjhRgifBHTCY2r75PCwFoGccvetTXwDY5YYU0MoTsiaEnZpTFybx2FgHvmSS/9eRM3TK00dxDVyfts3CjASwNfLRORRZ3177sVkpjKBqfB3lVN5CTo+5ju01hutoeGIB+8oTpgQwMat8VGfaWGF3CY0uh7N4CDhk4G1a5ZXmV7y3rD4DDP6atgrVeXa2bpDjQwEt/22jGQd83Pu8ue32rZVa6bqk1UPp0drfliMZMtt+ipo1mkRgx0kAAADAAAAAz8mNQMLuUFfkXHcmAY6p/JA7uc4d+DxupmANporT7TpYkTAmJL3rVDhia7iEyX82e6UPBMlrA1aLbUImMplpM6tdfUTCSTmCDBFA1WZCxjep50i+OeM7QFpduX9BCObD4bgCJ2mpZUx0C7fvrCtSqaPLpSCKTgP1mWfw3VAH6wMxh+TwZ3mirp7L6F/OhYkXG6yqblWwYWFTGdeVTKerUJkLWrHBKZ9ePmVJ8AkRmvwVtZCXA9+WiVobuClXFyyGSgAAAMAAAAB/d3JC2bO8UlhKZ1JGeYdXNUVzJMcl6ApKc3LqbpBR9GJPZWQaEaVNfFO/SwSUXXD1NSyR3GfLzmb0Gyadqi8uVmj963jifrenEqbVEeHyLyh56HgMNuqKYnIm/N8TyIa40Q9Fzu53u1+shq7APUJgy6/hZCfK2H5CBA07lqRJLJmL2UtLhez8ItnZfR0USzpwZGqJgjQBfstr2Bi96ieuW3SGhTm1qn+rtkph8sGy7BGqNWxzxEPpJWjRbvrC9JkAAAAA');
