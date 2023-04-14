<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f4b6685237f45201a94192586f71ee94($e,$m){

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
