<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_7560f1a2377dde23ba8a512655d967d1($e,$m){

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
