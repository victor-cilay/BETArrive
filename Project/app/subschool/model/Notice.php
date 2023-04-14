<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_23cb32b675c9c729aa92793ddc4d6723($e,$m){

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
