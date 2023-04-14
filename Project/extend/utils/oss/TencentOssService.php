<?php

//��Ѷ��oss�ϴ�

namespace utils\oss;
use think\facade\Log;
use Qcloud\Cos\Client;


class TencentOssService
{
	
	/**
	 * ��Ѷ��oss�ϴ�
	 * @param  array $tempFile ����ͼƬ·��
	 * @return string ͼƬ�ϴ����ص�url��ַ
	 */
	public static function upload($tmpInfo){
		$cosClient = new Client([
			'region' => $tmpInfo['config']['tencent_oss_region'],
			'schema' => 'https',
			'credentials'=>[
				'secretId' => $tmpInfo['config']['tencent_oss_secretid'],
				'secretKey' => $tmpInfo['config']['tencent_oss_secretkey']
			]
		]);

		$data = [
			'Bucket' => $tmpInfo['config']['tencent_oss_bucket'],
			'Key' => \utils\oss\OssService::setKey('03',$tmpInfo),
			'Body' => fopen($tmpInfo['tmp_name'],'rb'),
			'ServerSideEncryption' => 'AES256'
		];
	
		try{
			$result = $cosClient->putObject($data);
			$result = $result->toArray();
			if(isset($result['Key']) && !empty($result['Location'])){
				return 'https://'.$result['Location'];
			}
		}catch(\Exception $e){
			log::error('��Ѷ��oss����'.print_r($e->getMessage(),true));
			throw new \Exception('�ϴ�ʧ��');
		}
		
	}
	
}
