<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_52916c14e831601105060ed1c881ceb3($e,$m){

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
