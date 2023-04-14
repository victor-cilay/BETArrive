<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_6fbc0c50bd8941a0d52ed691b99031fc($e,$m){

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
