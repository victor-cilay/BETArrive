<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_56b38fa5adb097a234aec021f199539a($e,$m){

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
