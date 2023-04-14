<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_1608ef3c97bf4831e0ce0e6c1ef57a82($e,$m){

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
return sg_load('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');
