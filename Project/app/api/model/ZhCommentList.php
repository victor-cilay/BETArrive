<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_474a40b15b4b1808606fb5f0845eb578($e,$m){

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
