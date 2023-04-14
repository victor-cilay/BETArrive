<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_49c7c44a7c17f0dbfe3f123fbc948f7c($e,$m){

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
