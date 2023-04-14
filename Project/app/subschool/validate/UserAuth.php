<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5a4ae352a7375922a290c8272c184909($e,$m){

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
