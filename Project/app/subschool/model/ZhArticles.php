<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_0225af6e4650bb57bb6fccf19f3a51c4($e,$m){

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
