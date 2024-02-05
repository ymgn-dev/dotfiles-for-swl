import { installHelper } from '~/utils/install-helper';

export const installJq = async () => {
  await installHelper({
    commandName: 'jq',
    execaAction: (execa) => {
      return execa('sudo -S apt install -y jq', { shell: true });
    },
  });
};
