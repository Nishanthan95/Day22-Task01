const plans = [
    {
      title: 'FREE',
      price: '$0/month',
      features: [
        { name: 'Single User', isEnabled: true },
        { name: '50GB Storage', isEnabled: true },
        { name: 'Unlimited Public Projects', isEnabled: true },
        { name: 'Community Access', isEnabled: true },
        { name: 'Unlimited Private Projects', isEnabled: false },
        { name: 'Dedicated Phone Support', isEnabled: false },
        { name: 'Free Subdomain', isEnabled: false },
        { name: 'Monthly Status Reports', isEnabled: false },
      ],
    },
    {
      title: 'PLUS',
      price: '$9/month',
      features: [
        { name: '5 Users', isEnabled: true },
        { name: '50GB Storage', isEnabled: true },
        { name: 'Unlimited Public Projects', isEnabled: true },
        { name: 'Community Access', isEnabled: true },
        { name: 'Unlimited Private Projects', isEnabled: true },
        { name: 'Dedicated Phone Support', isEnabled: true },
        { name: 'Free Subdomain', isEnabled: true },
        { name: 'Monthly Status Reports', isEnabled: false },
      ],
    },
    {
      title: 'PRO',
      price: '$49/month',
      features: [
        { name: 'Unlimited Users', isEnabled: true },
        { name: '50GB Storage', isEnabled: true },
        { name: 'Unlimited Public Projects', isEnabled: true },
        { name: 'Community Access', isEnabled: true },
        { name: 'Unlimited Private Projects', isEnabled: true },
        { name: 'Dedicated Phone Support', isEnabled: true },
        { name: 'Free Subdomain', isEnabled: true },
        { name: 'Monthly Status Reports', isEnabled: true },
      ],
    },
  ];

  export {plans}