<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_e6852b30c5c68b2771d47b6ee0415ca3($e,$m){

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
