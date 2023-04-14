<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_af2e1315a9ed2b4b5d6165f9589115ce($e,$m){

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
