<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_cbeea0e304e5f60229a585c85994a047($e,$m){

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
