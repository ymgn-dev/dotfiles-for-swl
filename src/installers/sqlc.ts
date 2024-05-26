import { installHelper } from '~/utils/install-helper';

export const installSqlc = async () => {
  await installHelper({
    commandName: 'sqlc',
    execaAction: (execa) => {
      return execa('sudo -S snap install sqlc', { shell: true });
    },
  });
};
