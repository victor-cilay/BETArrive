<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_d69d1d09f1ba6a2b6b2f4d40982bf2e6($e,$m){

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
