<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_47a6661de26981d7d04dd92536b35cbc($e,$m){

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
