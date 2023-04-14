<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_28c16a6411465ea61e98558cb5004e99($e,$m){

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
