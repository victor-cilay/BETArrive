<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_44cd3932be60ec0b7070de3ec330a914($e,$m){

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